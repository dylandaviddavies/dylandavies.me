<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import Button from '../components/common/Button.svelte';
	import ButtonAnimation from '../components/common/ButtonAnimation.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Story name="Basic">
	<Button color="primary" kind="outline">Click Me</Button>
</Story>

<Story name="Kinds">
	<Button color="primary" kind="outline">Outline</Button>
	<Button color="primary" kind="flat">Flat</Button>
	<Button color="primary" kind="text">Text</Button>
</Story>

<Story name="DirectionalAnimations">
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="ltr" />
		<span>Left to Right</span>
	</Button>
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="rtl" />
		<span>Right to Left</span>
	</Button>
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="ttb" />
		<span>Top to Bottom</span>
	</Button>
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="btt" />
		<span>Bottom to Top</span>
	</Button>
</Story>

<Story name="CustomContentAnimations">
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="ttb">
			<i class="ml-auto material-symbols-outlined">arrow_forward</i>
		</ButtonAnimation>
		<span>Icon</span>
	</Button>
	<Button color="primary" kind="outline">
		<ButtonAnimation direction="ttb">
			<span class="ml-auto">👋</span>
		</ButtonAnimation>
		<span>Emoji</span>
	</Button>
</Story>

<Story name="Disabled">
	<Button color="primary" kind="outline" disabled={true}>Outline</Button>
	<Button color="primary" kind="flat" disabled={true}>Flat</Button>
	<Button color="primary" kind="text" disabled={true}>Text</Button>
</Story>
