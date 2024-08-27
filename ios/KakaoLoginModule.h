@class KakaoLoginModule;

@interface KakaoLoginModule : NSObject
- (KakaoLoginModule *)returnSwiftClassInstance;
+ (BOOL)isKakaoTalkLoginUrl:(NSURL *)url;
+ (BOOL)handleOpenUrl:(NSURL *)url;
@end
