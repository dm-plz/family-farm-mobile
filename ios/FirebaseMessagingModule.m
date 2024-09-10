#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(FirebaseMessagingModule, NSObject)

RCT_EXTERN_METHOD(getToken:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(eventsNotifyReady:(BOOL)ready)
RCT_EXTERN_METHOD(eventsAddListener:(NSString *)eventName)
RCT_EXTERN_METHOD(eventsRemoveListener:(NSString *)eventName all:(BOOL)all)

@end
