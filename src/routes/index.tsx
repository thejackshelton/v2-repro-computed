import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Checkbox } from "~/components/checkbox";
import { LuCheck } from "@qwikest/icons/lucide";

export default component$(() => {
	return (
		<Checkbox.Root>
			<Checkbox.Trigger>
				<Checkbox.Indicator>
					<LuCheck />
				</Checkbox.Indicator>
			</Checkbox.Trigger>
		</Checkbox.Root>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
