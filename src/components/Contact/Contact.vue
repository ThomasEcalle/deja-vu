<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com'
import { CONTACT } from '../../constants';
import TextField from './TextField.vue';
import SelectField from './SelectField.vue';
import TextArea from './TextArea.vue';
import ContactSubmit from './ContactSubmit.vue';
import { useStore } from 'vuex';

const store = useStore();

const offers = store.getters.allPages;

var firstNameValue = ref('');
var lastNameValue = ref('');
var emailValue = ref('');
var phoneValue = ref('');
var phoneValue = ref('');
var offersValue = ref(offers[0]);
var messageValue = ref('');

var missingFields = ref(false);

const formRef = ref('ContactForm');

function onSubmit() {
    if (firstNameValue.value === '') {
        missingFields.value = true;
        return;
    }

    if (lastNameValue.value === '') {
        missingFields.value = true;
        return;
    }

    if (emailValue.value === '') {
        missingFields.value = true;
        return;
    }

    if (phoneValue.value === '') {
        missingFields.value = true;
        return;
    }

    if (offersValue.value === '') {
        missingFields.value = true;
        return;
    }

    console.log(`Everything is ok, ready to send email :) ${firstNameValue.value},${firstNameValue} `);

    try {

        emailjs.init('user_eYolQlTfjcywShfedfj94');

        emailjs.sendForm('service_ncq7a4m', 'template_eo4wqbc', formRef.value).then(() => {

            firstNameValue.value = '';
            lastNameValue.value = '';
            emailValue.value = '';
            phoneValue.value = '';
            phoneValue.value = '';
            offersValue.value = offers[0];
            messageValue.value = '';

        }).catch(error => {
            console.log(`Error: ${error}`);
        })

    } catch (error) {
        console.log({ error })
    }
}

</script>

<template>
    <div
        class="absolute h-full w-full leading-[1.5em] dark:text-white text-black flex flex-row items-center wrap"
        :id="CONTACT"
    >
        <div
            class="text-[3.5vmax] w-[45vw] h-full uppercase flex flex-row justify-center items-center font-lemonmilk transition-colors duration-1000"
        >
            <h2 id="contact-title">Contactez-nous</h2>
        </div>
        <div class="h-full w-[55vw] capitalize font-normal">
            <form
                class="w-[90%] h-full grid grid-cols-2 gap-[2vmax] py-[10px] placeholder-current place-content-center"
                ref="formRef"
            >
                <TextField
                    class="basis-1/2"
                    type="text"
                    name="first_name"
                    labelText="Prénom"
                    :missing="missingFields && firstNameValue === ''"
                    v-model:model="firstNameValue"
                    @update:modelValue="firstNameValue = $event"
                    placeHolderText="Saisir votre prénom"
                />
                <TextField
                    class="basis-1/2"
                    type="text"
                    name="last_name"
                    labelText="Nom"
                    v-model:model="lastNameValue"
                    :missing="missingFields && lastNameValue === ''"
                    placeHolderText="Saisir votre nom"
                />
                <TextField
                    class="basis-1/2"
                    type="email"
                    name="email"
                    labelText="Adresse email"
                    v-model:model="emailValue"
                    :missing="missingFields && emailValue === ''"
                    placeHolderText="Saisir votre email"
                />
                <TextField
                    class="basis-1/2"
                    type="phone"
                    name="phone"
                    labelText="N° de téléphone"
                    v-model:model="phoneValue"
                    :missing="missingFields && phoneValue === ''"
                    placeHolderText="Saisir votre téléphone"
                />
                <SelectField
                    class="col-span-2"
                    name="offer"
                    labelText="Offres"
                    :offers="offers"
                    :missing="missingFields && offersValue === ''"
                    v-model:model="offersValue"
                />

                <div class="col-span-2 relative">
                    <TextArea
                        labelText="Message"
                        name="message"
                        v-model:model="messageValue"
                        placeHolderText="Décrire votre projet ici"
                    />
                    <ContactSubmit class="absolute bottom-[-3.5vmax] left-10" :onClick="onSubmit" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>
