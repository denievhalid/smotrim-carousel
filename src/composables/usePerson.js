import { ref } from "vue";
import api from "../api";
import { PERSONS_ID } from "../constants";

export default function usePerson() {
  const persons = ref([]);
  const loading = ref(true);

  const fetchPersons = () => {
    return api.get("/boxes/vesti2").then(
      ({
        data: {
          data: { content },
        },
      }) => {
        if (Array.isArray(content)) {
          persons.value.push(
            ...content.find((item) => item.id === PERSONS_ID).content
          );

          loading.value = false;
        }
      }
    );
  };

  return {
    loading,
    persons,
    fetchPersons,
  };
}
