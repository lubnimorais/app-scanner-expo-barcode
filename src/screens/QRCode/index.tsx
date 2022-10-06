import { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRCodeScreen = () => {
  const [permission, setPermission] = useState(false);

  const getBarCodeScannerPermissions = useCallback(async () => {
    try {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      setPermission(status === "granted");
    } catch (err) {
      console.log(err);
      setPermission(false);
    }
  }, [])

  useEffect(() => {
    getBarCodeScannerPermissions()
  }, [])

  return (
    <View style={styles.container}>
      {permission && (
        <BarCodeScanner
          style={styles.boxCamera}
          type="back"
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={({ type, data }) => {
            try {
              console.log(type);
              console.log(data);

              const result = JSON.parse(data);

              console.log(result)
            } catch (err) {
              console.log('Unable to parse: ', err)
            }
          }}
        >

          
        </BarCodeScanner>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },

  boxCamera: {
    width: '100%',
    height: '100%'
  },
  text: {
    backgroundColor: 'black',
    color: 'white'
  }
})

export { QRCodeScreen }