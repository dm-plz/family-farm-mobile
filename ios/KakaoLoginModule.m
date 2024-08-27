#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KakaoLoginModule, NSObject)

RCT_EXTERN_METHOD(signInWithKakao:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)reject);
RCT_EXTERN_METHOD(loginWithKakaoAccount:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)reject);

@end
