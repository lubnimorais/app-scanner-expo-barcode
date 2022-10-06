
import { useEffect, useCallback } from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { Routes } from './routes';



const App = () => {
  const requestCameraPermission = useCallback(async () => {
    try {
      await BarCodeScanner.requestPermissionsAsync();
      
    } catch (err) {
      console.log(err);    
    }
  }, [])
  
  useEffect(() => {
    requestCameraPermission()
  }, [])
  
  return (
    <Routes />
  );
};

export {App};
