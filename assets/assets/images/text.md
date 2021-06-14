开发中遇到添加新的设备，重新打包后， 仍然无法安装测试包。
解决：
删除本地的描述文件， 重新下载，重新打包

```swift
cd ~/Library/MobileDevice/Provisioning\ Profiles
rm *.mobileprovision
```
