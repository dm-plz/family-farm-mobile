package com.familyfarmrn

import android.app.Activity
import android.content.Context
import androidx.annotation.CallSuper
import com.facebook.react.bridge.*

class FirebaseEventModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ContextProvider {
    companion object {
        const val TAG = "FirebaseEventModule"
    }

    override fun getName(): String {
        return "FirebaseEventModule"
    }

    @CallSuper
    override fun initialize() {
        super.initialize()
        FirebaseEventEmitter.attachReactContext(getContext())
    }

    override fun getActivity(): Activity? {
        return currentActivity
    }

    override fun getContext(): ReactContext {
        return reactApplicationContext;
    }

    override fun getApplicationContext(): Context? {
        TODO("Not yet implemented")
    }

}

