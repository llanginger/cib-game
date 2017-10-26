import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import shortid from "shortid";
import * as _ from "lodash";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux";
import { IReducers } from "../redux/store";
import { updateScore, IUpdateScoreType } from "../redux/actions/index";

import { Toolbar } from "../components/Toolbar";
import { ImageMessageView } from "../components/ImageMessageView";
import { createGiftedUserMessage } from "../components/createGiftedUserMessage";

import { IMessageObject, IButtonObject } from "../interfaces/index";

import {
    levels,
    gameInit,
    nextLevel,
    IGameLevelObject
} from "../levels/levels";

import { ChatbotFooter } from "../components/ChatBotFooter";
import { ScoreContainer } from "../components/score/ScoreContainer";

interface IChatBotState {
    currentLevel?: IGameLevelObject;
    levels?: IGameLevelObject[];
    minInputToolbarHeight?: number;
    messages?: any[];
    botTyping?: boolean;
    userChoice?: any;
    dialogueTree?: any;
    chatbotDelay?: number;
}

interface IUSerChoice {
    keyboardType?: "default" | "phone-pad";
    active: boolean;
    single?: boolean;
    inputPlaceholder?: string;
    disclosure?: boolean;
    left?: string;
    right?: string;
}

const blankUserChoiceInactive: IUSerChoice = {
    active: false,
    single: false,
    keyboardType: "default",
    disclosure: false,
    inputPlaceholder: "...",
    left: "",
    right: ""
};

const aiMessage = {
    createdAt: new Date(),
    user: {
        _id: 2,
        name: "React Native",
        avatar: require("../images/gameAvatar.png")
    }
};

interface IChatBotProps {
    navigator: any;
    updateScore?: (type: IUpdateScoreType) => any;
}

export class _ChatBot extends React.Component<IChatBotProps, IChatBotState> {
    private chat;
    constructor(props) {
        super(props);

        this.state = {
            minInputToolbarHeight: 60,
            levels: [...levels],
            botTyping: false,
            currentLevel: { ...gameInit },
            messages: [],
            chatbotDelay: 1000
        };

        this.pushChatbotMessage = this.pushChatbotMessage.bind(this);
        this.renderCustomView = this.renderCustomView.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.tempShowModal = this.tempShowModal.bind(this);
        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    static navigatorButtons = {
        leftButtons: [
            {
                title: "menu",
                id: "menu",
                buttonColor: "orangered"
            }
        ]
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.minInputToolbarHeight != this.state.minInputToolbarHeight
        ) {
            this.chat.resetInputToolbar();
        }
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                this.props.navigator.toggleDrawer({
                    side: "left", // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    renderCustomView(props) {
        return <ImageMessageView {...props} />;
    }

    renderFooter(props) {
        return <ChatbotFooter botTyping={this.state.botTyping} />;
    }

    pushChatbotMessage(
        messages: IMessageObject[],
        stateOptions: IChatBotState = {} // refactor this
    ) {
        // Map over all messages to separate them out
        this.setState(
            {
                botTyping: true,
                userChoice: { ...blankUserChoiceInactive },
                minInputToolbarHeight: 0
            },
            () => {
                messages.map((message, i) => {
                    // create formatted message object
                    const messageObj = {
                        ...aiMessage,
                        _id: shortid.generate(),
                        ...message
                    };

                    setTimeout(() => {
                        this.setState((previousState: any) => ({
                            messages: GiftedChat.append(
                                previousState.messages,
                                messageObj
                            )
                        }));
                    }, this.state.chatbotDelay * (i + 1));
                });

                setTimeout(() => {
                    this.setState((previousState: IChatBotState) => ({
                        botTyping: false,
                        minInputToolbarHeight: 60,
                        ...stateOptions
                    }));
                }, this.state.chatbotDelay * (messages.length > 1 ? messages.length : 1));
            }
        );
    }

    tempShowModal() {
        console.log("Modal triggering");
        return this.props.navigator.showModal({
            screen: "CharacterSelect", // unique ID registered with Navigation.registerScreen
            title: "Modal", // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    renderToolbar() {
        const { userOptions } = this.state.currentLevel;

        const makeButtons: () => IButtonObject[] = () => {
            return userOptions.map((option, i) => {
                return {
                    ...option,
                    onClick: () =>
                        this.onUserBinaryChoice({
                            text: option.text,
                            onClick: option.onClick
                        })
                };
            });
        };
        return <Toolbar buttons={makeButtons()} />;
    }

    componentDidMount() {
        this.pushChatbotMessage(this.state.currentLevel.question);
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
    }

    selectRandomLevel() {
        this.setState({ currentLevel: _.sample(this.state.levels) }, () => {
            this.pushChatbotMessage(this.state.currentLevel.question);
        });
    }

    onUserBinaryChoice(userOption: { text: string; onClick: string }) {
        const { currentLevel } = this.state;

        const messages = [createGiftedUserMessage(userOption.text)];
        this.setState(
            (previousState: any) => ({
                messages: GiftedChat.append(previousState.messages, messages)
            }),
            () => {
                switch (userOption.onClick) {
                    case "start-game":
                    case "next-level":
                    case "Ready!":
                        this.selectRandomLevel();
                        return;
                    case "hot":
                        this.props.updateScore("hot");
                        this.pushChatbotMessage(currentLevel.response.hot, {
                            currentLevel: { ...nextLevel }
                        });
                        return;
                    case "cool":
                        this.props.updateScore("cool");
                        this.pushChatbotMessage(currentLevel.response.cool, {
                            currentLevel: { ...nextLevel }
                        });
                        return;
                }
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScoreContainer />
                <TouchableOpacity
                    onPress={this.tempShowModal}
                    style={{ height: 40, backgroundColor: "orangered" }}
                />
                <GiftedChat
                    messages={this.state.messages}
                    minInputToolbarHeight={this.state.minInputToolbarHeight}
                    renderInputToolbar={this.renderToolbar}
                    renderCustomView={this.renderCustomView}
                    onSend={messages => this.onSend(messages)}
                    renderFooter={this.renderFooter}
                    showUserAvatar={true}
                    ref={ref => (this.chat = ref)}
                    user={{
                        _id: 1,
                        avatar: require("../images/girlCool.png")
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {};
};

const mapDispatchToProps = {
    updateScore
};

export const ChatBot = connect(mapStateToProps, mapDispatchToProps)(_ChatBot);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#daf6fa"
    }
});
