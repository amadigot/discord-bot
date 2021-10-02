module.exports = (msg) => {
    const { content } = msg
  
    const a = content.split("\n")
   
    const ranga = a[0]
    const imie = a[1]
    const wiek = a[2]
    const zainteresowania = a[3]
    const Jestemdostępnygodzin = a[4]
    const Powinienemzostaćwybranybo = a[5]
    
  
    
    if (
      !ranga.startsWith("Chce rangę:") ||
      !imie.startsWith("Imię:") ||
      !wiek.startsWith("Wiek:") ||
      !zainteresowania.startsWith("Zainteresowania:") ||
      !Jestemdostępnygodzin.startsWith("Jestem dostępny (godzin):") ||
      !Powinienemzostaćwybranybo.startsWith("Powinienem zostać wybrany bo:")
      
    )
      msg.delete()
  
    console.log(a)
}