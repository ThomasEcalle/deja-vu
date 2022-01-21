<script setup>
import { CONTACT } from '../../constants';
import TextField from './TextField.vue';
import SelectField from './SelectField.vue';
import TextArea from './TextArea.vue';
import ContactSubmit from './ContactSubmit.vue';

</script>

<template>
    <div
        class="absolute h-full w-full leading-[1.5em] dark:text-white text-black flex flex-row items-center wrap"
        :id="CONTACT"
    >
        <div
            class="text-[3.5vmax] w-[45vw] h-full uppercase flex flex-row justify-center items-center font-lemonmilk transition-colors duration-1000"
        >
            <h2>Contactez-nous</h2>
        </div>
        <div class="h-full w-[55vw] capitalize font-normal">
            <form
                class="w-[80%] h-full grid grid-cols-2 gap-[2vmax] py-[10px] placeholder-current place-content-center"
                action="/"
                method="post"
            >
                <TextField
                    class="basis-1/2"
                    type="text"
                    name="first_name"
                    labelText="Prénom"
                    :missing="false"
                    placeHolderText="Saisir votre prénom"
                />
                <TextField
                    class="basis-1/2"
                    type="text"
                    name="last_name"
                    labelText="Nom"
                    :missing="false"
                    placeHolderText="Saisir votre nom"
                />
                <TextField
                    class="basis-1/2"
                    type="email"
                    name="email"
                    labelText="Adresse email"
                    :missing="false"
                    placeHolderText="Saisir votre email"
                />
                <TextField
                    class="basis-1/2"
                    type="phone"
                    name="phone_number"
                    labelText="N° de téléphone"
                    :missing="false"
                    placeHolderText="Saisir votre téléphone"
                />
                <SelectField class="col-span-2" name="offers" labelText="Offres" />

                <div class="col-span-2 relative">
                    <TextArea
                        labelText="Message"
                        name="message"
                        placeHolderText="Décrire votre projet ici"
                    />
                    <ContactSubmit class="absolute bottom-[-3.5vmax] left-10" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>
