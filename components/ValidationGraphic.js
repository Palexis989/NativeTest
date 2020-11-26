import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {t, color} from 'react-native-tailwindcss';
import {useForm, Controller} from 'react-hook-form';

import Input from './Input';
import Button from './Button';

export default function ValidationGraphic() {
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };

  const {handleSubmit, control, errors} = useForm();

  return (
    <View style={styles.container}>
      <Controller
        defaultValue=""
        name="name"
        control={control}
        render={({onChange, value}) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Name"
          />
        )}
      />
      <Controller
        defaultValue=""
        name="email"
        control={control}
        render={({onChange, value}) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Email"
          />
        )}
      />
      <View style={styles.switch}>
        <Text style={styles.switchText}>Billing different</Text>
        <Switch
          trackColor={{false: color.gray200, true: color.green600}}
          thumbColor={color.gray100}
          ios_backgroundColor={color.gray800}
          onValueChange={toggleBilling}
          value={isBillingDifferent}
        />
      </View>
      {isBillingDifferent && (
        <>
          <Input placeholder="Billing name" />
          <Input placeholder="Billing email" />
        </>
      )}
      <Button label="Submit" />
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800],
};
