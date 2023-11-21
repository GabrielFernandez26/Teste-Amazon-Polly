const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.loadFromPath('./config.json')
AWS.config.update({ region: 'us-east-1' });

const polly = new AWS.Polly()

const input = {
    Engine:'neural',
    LanguageCode:'pt-BR',
    OutputFormat:'mp3',
    Text:'Olá, isso é um exemplo de texto convertido em fala com o Amazon Polly.',
    TextType:'text',
    VoiceId:'Vitoria'
  };

  polly.synthesizeSpeech(input, (err, data) => {
    if (err) {
      console.error('Erro ao converter texto em fala:', err);
      return
    } 
    if(data.AudioStream){
        fs.writeFile('test.mp3', data.AudioStream, (err)=>{})
    }
  });