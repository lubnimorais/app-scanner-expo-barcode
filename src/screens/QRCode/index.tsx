import { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

interface IOnBarcodeScanner {
  type: string;
  data: string;
}

const QRCodeScreen = () => {
  const [permission, setPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const getBarCodeScannerPermissions = useCallback(async () => {
    try {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      setPermission(status === "granted");
    } catch (err) {
      console.log(err);
      setPermission(false);
    }
  }, [])

  const handleBarCodeScanned = useCallback(({ type, data }: IOnBarcodeScanner) => {
    setScanned(true);
    Alert.alert('Scanner', `${data} has been scanned!`, [
      {
        text: 'OK',
        onPress: () => { setScanned(false)}
      }
    ]);
  }, []);

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
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        
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