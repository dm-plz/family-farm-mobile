package com.familyfarmrn

import android.app.Activity
import android.content.Context
import com.facebook.react.bridge.ReactContext


interface ContextProvider {
    fun getActivity(): Activity?

    fun getContext(): ReactContext

    fun getApplicationContext(): Context?
}