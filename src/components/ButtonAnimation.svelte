<script lang="ts">
	export let direction: 'ltr' | 'ttb' | 'btt' | 'rtl' = 'rtl';
	export let color: string = 'primary';
</script>

<div class="dd-button__animation dd-button__animation--{direction} dd-button__animation--{color}">
	<slot />
</div>
