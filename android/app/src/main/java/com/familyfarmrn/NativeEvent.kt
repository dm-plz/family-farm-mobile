package com.familyfarmrn

import com.facebook.react.bridge.WritableMap;

interface NativeEvent {
    fun getEventName(): String

    fun getEventBody(): WritableMap

    fun getFirebaseAppName(): String?
}