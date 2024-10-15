<script setup>
  import { useForm } from "vee-validate";
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const { handleSubmit } = useForm();
  const name = ref("");
  const email = ref("");
  const subject = ref("");
  const message = ref("");
  const submit = handleSubmit(async () => {
    console.log(name.value, email.value, subject.value, message.value);
  });
  const openModal = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });
  const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div
    class="fixed z-50 inset-0 overflow-y-auto mx-auto font-body w-full h-screen md:h-full md:w-1/2 xl:w-1/3 mt-4"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full"
      >
        <div class="py-6 px-8 md:px-12 dark:bg-bg-secondary-dark">
          <div class="flex justify-between items-center my-3">
            <div class="font-bold text-xl p-1 text-black dark:text-white">
              Book Service
            </div>
            <div class="hover:cursor-pointer">
              <div
                class="bg-gray-300 rounded-md flex justify-center items-center content-center h-8 w-8 text-center hover:bg-opacity-30"
              >
                <button
                  @click="openModal = false"
                  class="justify-center items-center self-center"
                >
                  <Icon
                    class="h-5 w-5 text-black text-center"
                    name="ic:sharp-close"
                  ></Icon>
                </button>
              </div>
            </div>
          </div>
          <form @submit.prevent="submit" class="mb-5">
            <div class="w-full flex flex-col lg:px-5 gap-y-8">
              <div class="flex-1 w-full">
                <div class="flex flex-col w-full">
                  <FormTextField
                    name="name"
                    v-model="name"
                    placeholder="Name"
                    rules="required"
                    placeholder-style="text-primary-lite"
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
                    name="email"
                    v-model="email"
                    placeholder="Email"
                    rules="required|email"
                    placeholder-style="text-primary-lite"
                  >
                    <template #label>
                      <h1
                        class="font-semibold font-body px-3 lg:text-lg text-base text-minab-gray dark:text-secondary-navbar mb-2"
                      >
                        Email
                      </h1>
                    </template>
                  </FormTextField>
                </div>
              </div>
              <div class="flex-1 w-full">
                <div class="flex flex-col w-full">
                  <FormTextField
                    name="subject"
                    v-model="subject"
                    placeholder="Subject"
                    placeholder-style="text-primary-lite"
                    rules="required"
                  >
                    <template #label>
                      <h1
                        class="font-semibold font-body px-3 lg:text-lg text-base text-minab-gray dark:text-secondary-navbar mb-2"
                      >
                        Subject
                      </h1>
                    </template>
                  </FormTextField>
                </div>
              </div>
              <div class="flex-1 w-full">
                <div hide-details="">
                  <label
                    class="text-minab-gray dark:text-secondary-navbar font-semibold font-body mb-2 lg:text-lg text-base block"
                    ><span class="text-red-500" style="display: none"></span
                    >Message</label
                  >
                  <div
                    class="mt-1 relative rounded-md shadow-sm rounded-b-none"
                  >
                    <textarea
                      type="text"
                      name="message"
                      rows="8"
                      class="focus:ring-primary focus:border-primary hover:border-primary-2 placeholder:p-5 border-gray-300 border-1 bg-secondary-4 dark:bg-minab-dark-background dark:outline-none dark:border-none dark:ring-0 dark:text-secondary-navbar shadow-none rounded-b-none ouytline-none block w-full pr-10 text-secondary-dark placeholder-primary focus:outline-none text-base rounded-md"
                      placeholder="Write here the description of the service you requesting ..."
                    ></textarea>
                  </div>
                  <p
                    visible=""
                    class="mt-2 text-sm text-red-600"
                    id="email-error"
                  >
                    &nbsp;
                  </p>
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
    </div>
  </div>
</template>
