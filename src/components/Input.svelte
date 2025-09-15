<script>
  export let type = 'text';
  export let value = '';
  export let clazz = '';
  export let placeholder = '';
</script>

<input {type} {placeholder} bind:value class="{clazz}" />
