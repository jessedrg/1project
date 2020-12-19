

    
        
     const  names=['Aarón' ,'Ander' ,'Joaquín','Abel' ,'Andrés' ,'Joel',
        'Abelardo' ,'Ángel' ,'Jon','Abraham' ,'Aníbal', 'Jordi',
        'alberto', 'Antonio' ,'Jorge','Adam' ,'Arnau', 'José']

    const verbs=['hablar','comer','vivir','estar','ser','tener','poner','tomar','dar',	
        'ir','decir','hacer','poder','necesitar','querer','abrir','agarrar','andar']

    const adbejtives=['afortunado','diligente','negro',
        'alto','directo','anaranjado','anormal',		
        'amable','duro','obsecuente','antiguo',
        'amarillo','enorme','paciente','angosto']

       
        function randomFrasesArr(){
            let fraseArr =[];
            for(let i=0 ; i<6 ; i++){
                if(i==0 || (i==3)){
                    fraseArr.push(names[Math.floor(Math.random()*names.length)]);


                }else if(i==1 || (i==4)){
                    fraseArr.push(verbs[Math.floor(Math.random()*verbs.length)]);


                }else if (i==2 || (i==5)){
                    fraseArr.push(adbejtives[Math.floor(Math.random()*adbejtives.length)]);

                }

                }
            return fraseArr[0]+' '+fraseArr[1]+' '+fraseArr[2]+' '+fraseArr[3]+' '+fraseArr[4]
            }
    
console.log(randomFrasesArr());
    

    

