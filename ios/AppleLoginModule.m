#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(AppleLoginModule, NSObject)

RCT_EXTERN_METHOD(loginWithApple:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
