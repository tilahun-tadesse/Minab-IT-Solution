<script setup>
  import { useForm } from "vee-validate";

  const { handleSubmit } = useForm();
  const name = ref("");
  const email = ref("");
  const message = ref("");
  const phoneNumber = ref("");
  const submit = handleSubmit(async () => {
    console.log(name.value, email.value, message.value, phoneNumber.value);
  });
</script>
<template>
  <div id="contact" class="lg:px-24 md:px-5 px-3 w-full">
    <div class="w-full h-full py-10 lg:px-10 px-2">
      <div class="flex w-full gap-x-10 flex-row max-xl:flex-col">
        <section
          class="w-[50%] max-xl:w-[100%] flex xl:flex-col md:flex-row flex-col"
        >
          <div class="w-full md:w-[60%] max-md:se">
            <div
              class="font-bold font-body lg:text-6xl sm:text-3xl text-2xl text-minab-gray dark:text-secondary-navbar"
            >
              Get
              <span class="block"
                >in touch<span class="text-primary lg:text-8xl text-4xl"
                  >.</span
                ></span
              >
            </div>
            <div class="font-body mt-8 space-y-5">
              <div class="flex text-lg font-body font-semibold">
                <div class="mr-5">
                  <Icon
                    name="mdi:phone"
                    class="dark:text-secondary-navbar text-primary w-6 h-6"
                  ></Icon>
                </div>
                <span
                  class="text-minab-gray dark:text-secondary-navbar lg:text-lg text-baselg:"
                  >+251118221001</span
                >
              </div>
              <div class="flex text-lg font-body font-semibold">
                <div class="mr-5">
                  <Icon
                    name="mdi:phone"
                    class="dark:text-secondary-navbar text-primary w-6 h-6"
                  >
                  </Icon>
                </div>
                <span
                  class="text-minab-gray dark:text-secondary-navbar lg:text-lg text-base"
                  >+251118221002</span
                >
              </div>
              <div class="flex text-lg font-body font-semibold">
                <div class="mr-5">
                  <Icon
                    name="material-symbols:mail"
                    class="dark:text-secondary-navbar text-primary w-6 h-6"
                  ></Icon>
                </div>
                <span
                  class="text-minab-gray dark:text-secondary-navbar lg:text-lg text-base"
                  >info@minabtech.com</span
                >
              </div>
              <div>
                <div class="flex text-lg font-body font-semibold">
                  <div class="mr-5">
                    <Icon
                      name="mdi:location"
                      class="dark:text-secondary-navbar text-primary w-6 h-6"
                    ></Icon>
                  </div>
                  <span
                    class="text-minab-gray dark:text-secondary-navbar lg:text-lg text-base"
                    >Addis Ababa, Ethiopia</span
                  >
                </div>
                <div
                  class="text-minab-gray dark:text-secondary-navbar font-semibold ml-10 lg:text-lg text-base mt-2"
                >
                  Bole, Behind DH-geda Tower, Afomi Building 3rd floor, Addis
                  Ababa
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full relative z-0 mt-20 max-xl:mt-5 bg-white dark:bg-minab-dark-section rounded-lg"
          >
            <SelectorMap />
          </div>
        </section>
        <section
          class="flex-1 w-[50%] max-xl:w-[100%] 2xl:mt-10 lg:mt-0 mt-7 h-full bg-white dark:bg-minab-dark-section lg:p-7 px-5 py-7 rounded-lg 2xl:mx-20"
        >
          <div class="">
            <div
              class="font-bold text-primary-minab-2 dark:text-secondary-navbar lg:text-6xl sm:text-2xl text-xl flex justify-center pt-4"
            >
              Contact Us
            </div>
            <div class="xl:px-4 2xl:px-10 px-0 mt-5">
              <form @submit.prevent="submit">
                <div class="w-full flex flex-col gap-y-8 lg:px-5">
                  <div class="flex-1 w-full">
                    <div class="flex flex-col w-full">
                      <FormTextField
                        name="name"
                        v-model="name"
                        placeholder="Name"
                        rules="required"
                      >
                        <template #label>
                          <h1
                            class="font-semibold font-body px-3 lg:text-lg text-base text-minab-gray dark:text-secondary-navbar mb-2"
                          >
                            Name
                          </h1>
                        </template>
                      </FormTextField>
                    </div>
                  </div>
                  <div class="flex-1 w-full">
                    <div class="flex flex-col w-full">
                      <FormTextField
                        name="phoneNumber"
                        v-model="phoneNumber"
                        placeholder="PhoneNumber"
                        rules="ethiopian_phone_number|required"
                      >
                        <template #label>
                          <h1
                            class="font-semibold font-body px-3 lg:text-lg text-base text-minab-gray dark:text-secondary-navbar mb-2"
                          >
                            PhoneNumber
                          </h1>
                        </template>
                      </FormTextField>
                    </div>
                  </div>
                  <div class="flex-1 w-full">
                    <div class="flex flex-col w-full">
                      <FormTextField
                        name="emial"
                        v-model="email"
                        placeholder="email"
                        rules="required|email"
                      >
                        <template #label>
                          <h1
                            class="font-semibold font-body px-3 lg:text-lg text-base text-minab-gray dark:text-secondary-navbar mb-2"
                          >
                            Emial
                          </h1>
                        </template>
                      </FormTextField>
                    </div>
                  </div>
                  <div class="flex-1 w-full">
                    <div hide-details="">
                      <label
                        class="text-minab-gray dark:text-secondary-navbar font-semibold mb-2 lg:text-lg text-base block font-body"
                        ><span style="display: none" class="text-red-500"></span
                        >Message</label
                      >
                      <div
                        class="rounded-b-none mt-1 relative rounded-md shadow-sm"
                      >
                        <textarea
                          rows="8"
                          class="focus:ring-primary p-3 focus:border-primary hover:border-primary-2 border-gray-300 border-1 bg-secondary-4 dark:bg-minab-dark-background dark:outline-none dark:border-none dark:ring-0 dark:text-secondary-navbar shadow-none rounded-b-none ouytline-none block w-full pr-10 text-secondary-dark placeholder-primary focus:outline-none text-base rounded-md"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 w-1/2 mt-5"></div>
                </div>
                <div class="px-5 flex justify-end mt-5">
                  <button
                    class="bg-primary text-white dark:text-secondary-navbar font-body font-semibold lg:text-lg text-base capitalize px-6 py-2.5 rounded-lg"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
