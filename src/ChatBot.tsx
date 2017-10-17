import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import shortid from "shortid";
import { GiftedChat } from "react-native-gifted-chat";

import { Toolbar } from "./components/Toolbar";

interface IChatBotState {
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
        avatar: require("./images/gameAvatar.png")
    }
};

interface IChatBotProps {
    navigator: any;
}

export class ChatBot extends React.Component<IChatBotProps, IChatBotState> {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            chatbotDelay: 1000
        };

        this.pushChatbotMessage = this.pushChatbotMessage.bind(this);
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

    pushChatbotMessage(messages: string[], stateOptions: IChatBotState = {}) {
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
                        text: message
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
                        minInputToolbarHeight: 44,
                        ...stateOptions
                    }));
                }, this.state.chatbotDelay * (messages.length > 1 ? messages.length : 1));
            }
        );
    }

    renderToolbar() {}

    componentDidMount() {
        this.pushChatbotMessage([
            "Hello Pablo!",
            "Let me know when you're ready to start the game!"
        ]);
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    minInputToolbarHeight={60}
                    renderInputToolbar={() => <Toolbar />}
                    onSend={messages => this.onSend(messages)}
                    showUserAvatar={true}
                    user={{
                        _id: 1,
                        avatar: require("./images/girlCool.png")
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#daf6fa"
    }
});
