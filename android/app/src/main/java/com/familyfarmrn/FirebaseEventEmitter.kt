package com.familyfarmrn

import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.annotation.MainThread
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule


object FirebaseEventEmitter {
    private lateinit var reactContext: ReactContext
    private val queuedEvents: MutableList<NativeEvent> = ArrayList()
    private val handler: Handler = Handler(Looper.getMainLooper())
    private val jsListeners = HashMap<String, Int>()
    private var jsReady = false
    private var jsListenerCount = 0

    fun attachReactContext(reactContext: ReactContext) {
        handler.post {
            this.reactContext = reactContext
            sendQueuedEvents()
        }
    }

    fun notifyJsReady(ready: Boolean) {
        handler.post {
            jsReady = ready
            sendQueuedEvents()
        }
    }

    fun sendEvent(event: NativeEvent) {
        Log.d("MyFirebaseMsgService", "sendEvent")
        handler.post {
            synchronized(jsListeners) {
                if (!jsListeners.containsKey(event.getEventName()) || !emit(event)) {
                    queuedEvents.add(event)
                }
            }
        }
    }

    fun addListener(eventName: String?) {
        synchronized(jsListeners) {
            jsListenerCount++
            if (jsListeners.containsKey(eventName)) {
                val listenersForEvent = jsListeners[eventName]!!
                jsListeners.put(eventName!!, listenersForEvent + 1)
            } else {
                jsListeners.put(eventName!!, 1)
            }

        }

        handler.post(this::sendQueuedEvents)
    }

    fun removeListener(eventName: String?, all: Boolean) {
        synchronized(jsListeners) {
            if (jsListeners.containsKey(eventName)) {
                val listenersForEvent = jsListeners[eventName]!!

                if (listenersForEvent <= 1 || all) {
                    jsListeners.remove(eventName)
                } else {
                    jsListeners[eventName!!] = listenersForEvent - 1
                }

                jsListenerCount -= if (all) listenersForEvent else 1
            }
        }
    }

    @MainThread
    private fun sendQueuedEvents() {
        synchronized(jsListeners) {
            val eventsCopy = ArrayList(queuedEvents)
            for (event in eventsCopy) {
                if (jsListeners.containsKey(event.getEventName())) {
                    queuedEvents.remove(event)
                    sendEvent(event)
                }
            }
        }
    }

    @MainThread
    private fun emit(event: NativeEvent): Boolean {
        Log.d("MyFirebaseMsgService", "emit called")
        if (!jsReady || reactContext == null || !reactContext.hasActiveReactInstance()) {
            return false
        }

        try {
            Log.d("MyFirebaseMsgService", "emit try")
            reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(event.getEventName(), event.getEventBody())
        } catch (e: Exception) {
            Log.wtf("RN_FB_EMITTER", "Error sending Event " + event.getEventName(), e)
            return false
        }

        Log.d("MyFirebaseMsgService", "emit done")
        return true
    }
}