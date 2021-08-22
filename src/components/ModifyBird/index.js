import React, {useState} from 'react';
import firebase from "firebase";

const ModifyBird = ({match}) => {
    const birdRing = match.params.birdRing;

    const data = {
        ring: birdRing,
        bird_type: '',
        length: '',
        weight: '',
        fat: '',
        sex: '',
        age: ''
    };


    firebase.firestore().collection("birds").where("ring", "==", birdRing)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                data.bird_type = doc.data().bird_type;
                data.length = doc.data().length;
                data.weight = doc.data().weight;
                data.fat = doc.data().fat;
                data.sex = doc.data().sex;
                data.age = doc.data().age;
                console.log(data);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    return (
        <div>
            {data.bird_type}
        </div>
    )
}


export default ModifyBird