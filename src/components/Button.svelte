<script>
  export let type = 'button';
  export let clazz = '';
</script>

<button {type} class="{clazz}">
  <slot />
</button>
