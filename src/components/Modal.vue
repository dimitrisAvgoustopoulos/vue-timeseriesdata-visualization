<script setup>
import { ref, defineExpose} from 'vue';

const dialog = ref();

function open(){
  dialog.value.showModal();
};
function close(){
  dialog.value.close();
};

// expose the functions and ref to the parent component for access
defineExpose({
    dialog,
    open,
    close
});

</script>

<template>
  <Teleport to="#modal"><!-- Teleport the dialog to the #modal div to be sepparate from the app body -->
    <dialog ref="dialog" class="backdrop:bg-stone-900/90 p-6 rounded-lg shadow-lg w-2/4 text-sm mx-auto md:text-lg md:max-w-md">
        <div class="text-center">
            <h2 class="text-sm font-semibold mb-4 md:text-xl">Wrong Input</h2>
            <p class="mb-6">Please input a number between -2000 and 2000</p>
        </div>
        <button class="bg-blueStellar text-white rounded-sm px-2 py-1 mx-auto block" @click="close">Close</button>
    </dialog>
  </Teleport>
</template>