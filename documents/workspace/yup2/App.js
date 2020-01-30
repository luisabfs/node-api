import React, {useRef} from 'react';
import {schema} from './validation.js';
import {useForm} from 'react-hook-form';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, Button, Title} from 'react-native-paper';

const App = () => {
  const {register, setValue, handleSubmit, errors} = useForm({
    validationSchema: schema,
    // validationSchemaOption: {abortEarly: true, context: {inputRef}},
  });
  const inputRef = useRef(null);
  // console.log(errors);
  const onSubmit = ({cpf}) => console.log('onSubmit', cpf);

  return (
    <>
      <TextInput
        onChangeText={text => {
          setValue('cpf', text);
          schema.isValidSync({cpf: text}, {context: {inputRef}});
        }}
        error={errors.cpf}
        render={props => (
          <TextInputMask
            {...props}
            type="cpf"
            ref={ref => {
              inputRef.current = ref;
              register({name: 'cpf'});
            }}
          />
        )}
      />
      {errors.cpf && <Title>{errors.cpf.message}</Title>}
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </>
  );
};

export default App;
