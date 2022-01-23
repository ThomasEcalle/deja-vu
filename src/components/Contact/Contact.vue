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
var loading = ref(false);

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

    try {

        loading.value = true;

        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

        emailjs.sendForm('service_ncq7a4m', 'template_eo4wqbc', formRef.value).then(() => {

            loading.value = false;
            missingFields.value = false;

            firstNameValue.value = '';
            lastNameValue.value = '';
            emailValue.value = '';
            phoneValue.value = '';
            phoneValue.value = '';
            offersValue.value = offers[0];
            messageValue.value = '';

        }).catch(error => {
            console.log(`Error: ${error}`);
            loading.value = false;
        })

    } catch (error) {
        console.log({ error })
    }
}

</script>

<template>
    <div
        class="absolute h-full w-full leading-[1.5em] dark:text-white text-black flex flex-col sm:flex-row sm:items-center wrap pt-[2vh] sm:pt-0"
        :id="CONTACT"
    >
        <div
            class="sm:text-[3.5vmax] text-[7vw] sm:w-[45vw] sm:h-full uppercase flex flex-row sm:justify-center items-center font-lemonmilk transition-colors duration-1000"
        >
            <h2 id="contact-title">Contactez-nous</h2>
        </div>
        <div class="h-full sm:w-[50vw] capitalize font-normal sm:mt-0 mt-[20px] overflow-scroll sm:overflow-visible no-scrollbar">
            <form
                class="
                w-[90%] 
                sm:h-full
                h-[95%] 
                grid sm:grid-cols-2 sm:gap-x-[2vh] gap-y-0 sm:gap-y-[4vh] 
                placeholder-current 
                sm:place-content-center
                "
                ref="formRef"
            >
                <TextField
                    class="sm:basis-1/2 col-span-2 sm:col-span-1"
                    type="text"
                    name="first_name"
                    labelText="Prénom"
                    :missing="missingFields && firstNameValue === ''"
                    v-model:model="firstNameValue"
                    @update:modelValue="firstNameValue = $event"
                    placeHolderText="Saisir votre prénom"
                />
                <TextField
                    class="sm:basis-1/2 col-span-2 sm:col-span-1"
                    type="text"
                    name="last_name"
                    labelText="Nom"
                    v-model:model="lastNameValue"
                    :missing="missingFields && lastNameValue === ''"
                    placeHolderText="Saisir votre nom"
                />
                <TextField
                    class="sm:basis-1/2 col-span-2 sm:col-span-1"
                    type="email"
                    name="email"
                    labelText="Adresse email"
                    v-model:model="emailValue"
                    :missing="missingFields && emailValue === ''"
                    placeHolderText="Saisir votre email"
                />
                <TextField
                    class="sm:basis-1/2 col-span-2 sm:col-span-1"
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
                    <transition>
                        <ContactSubmit
                            v-if="!loading"
                            class="absolute sm:bottom-[-3.5vmax] bottom-[-6vw] left-[15px] sm:left-10"
                            :onClick="onSubmit"
                        />
                    </transition>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>
