declare module 'react-native-global-props' {

    import {
        ActivityIndicatorProps,
        ImageProps,
        KeyboardAvoidingViewProps,
        ListViewProps,
        ModalProps,
        PickerProps,
        RefreshControlProps,
        ScrollViewProps,
        SliderProps,
        StatusBarProps,
        SwitchProps,
        TextInputProps,
        TextProps,
        TouchableHighlightProps,
        TouchableNativeFeedbackProps,
        TouchableOpacityProps,
        TouchableWithoutFeedbackProps,
        ViewProps,
    } from 'react-native'

    declare function setCustomView(customViewProps: ViewProps): void

    declare function setCustomTextInput(customTextInputProps: TextInputProps): void

    declare function setCustomText(customTextProps: TextProps): void

    declare function setCustomImage(customImageProps: ImageProps): void

    declare function setCustomTouchableHighlight(customTouchableHighlightProps: TouchableHighlightProps): void

    declare function setCustomTouchableNativeFeedback(customTouchableNativeFeedbackProps: TouchableNativeFeedbackProps): void

    declare function setCustomTouchableWithoutFeedback(customTouchableWithoutFeedbackProps: TouchableWithoutFeedbackProps): void

    declare function setCustomTouchableOpacity(customTouchableOpacityProps: TouchableOpacityProps): void

    declare function setCustomActivityIndicator(customActivityIndicatorProps: ActivityIndicatorProps): void

    declare function setCustomKeyboardAvoidingView(customKeyboardAvoidingViewProps: KeyboardAvoidingViewProps): void

    declare function setCustomModal(customModalProps: ModalProps): void

    declare function setCustomPicker(customPickerProps: PickerProps): void

    declare function setCustomRefreshControl(customRefreshControlProps: RefreshControlProps): void

    declare function setCustomScrollView(customScrollViewProps: ScrollViewProps): void

    declare function setCustomSlider(customSliderProps: SliderProps): void

    declare function setCustomStatusBar(customStatusBarProps: StatusBarProps): void

    declare function setCustomSwitch(customSwitchProps: SwitchProps): void

    // Deprecated components
    declare function setCustomListView(customListViewProps: ListViewProps): void

    declare function setCustomWebView(customWebViewProps: any): void

}
