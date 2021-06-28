import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

yup.setLocale({
  mixed: { required: 'Campo obrigatório' }
})

export const loginResolver = yupResolver(
  yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
  })
)
