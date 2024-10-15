import useNottify from "@/use/notify";
export default defineNuxtPlugin((nuxtApp) => {
    const { notify } = useNottify();
    nuxtApp.hook('apollo:error', (error) => {
        if (error.graphQLErrors[0]?.message == "Could not verify JWT: JWTExpired") {
            notify({
              title: "Session Expired!",
        description: "Session Expired, Please try to signin again!",
        cardClass: "bg-green-100 mt-14",
        icon: "simple-line-icons:check",
        iconClass: "text-green-400",
        borderClass: "border-l-8 border-green-300 rounded-l-lg",
            });
            return navigateTo("/")
        }
        else if(error.graphQLErrors[0]?.message == "internal error" &&
      error.graphQLErrors[0]?.extensions?.internal?.response?.body?.message ==
            "Message: bad user credentials, Locations: []")
        {
            return navigateTo("/")
        }
        else {
      notify({
        title: "Query Failed!",
        description: error.graphQLErrors[0]?.message.toUpperCase(),
        cardClass: "bg-red-100 mt-14",
        icon: "simple-line-icons:check",
        iconClass: "text-red-400",
        borderClass: "border-l-8 border-red-300 rounded-l-lg",
      });
    }
    })
})