import { createApp } from 'vue'
import IconRemove from "@/components/Icons/IconRemove"
import IconBase from "@/components/Icons/IconBase";
import IconPlus from "@/components/Icons/IconPlus";
import IconPushPin from "@/components/Icons/IconPushPin";
import IconDelete from "@/components/Icons/IconDelete";
import IconEdit from "@/components/Icons/IconEdit";
import IconStar from "@/components/Icons/IconStar";

const app = createApp({})

app.component('icon-base', IconBase);
app.component('icon-remove', IconRemove);
app.component('icon-plus', IconPlus);
app.component('icon-push-pin', IconPushPin);
app.component('icon-delete', IconDelete);
app.component('icon-edit', IconEdit);
app.component('icon-star', IconStar);