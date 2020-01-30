import * as Yup from 'yup';

const validate = reference =>
  reference.options.context.inputRef.current.isValid() ? true : false;

export const schema = Yup.object().shape({
  cpf: Yup.string()
    // .required('Campo obrigatório')
    // .ensure()
    .test('invalido', 'Inválido', function(value) {
      // console.log(this.options.context.inputRef.current.isValid());
      return validate(this);
    }),
});
