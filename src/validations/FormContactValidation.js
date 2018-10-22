export const validateEmail = value => {
  if (!value) {
   return 'champs requis'
 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
   return "l'adresse email est invalide"
 }else{
   return undefined
 }
}

export const validateNotEmpty = value => (value ? undefined : 'champs requis')
