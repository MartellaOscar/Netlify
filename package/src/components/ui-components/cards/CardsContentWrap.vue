<script setup lang="ts">
import { ref } from "vue";
import proimg1 from '@/assets/images/blog/blog-img1.jpg';

const messages = ref([
  {
    from: "You",
    message: `Sure, I'll see you later.`,
    time: "10:42am",
    color: "primary",
  },
  {
    from: "John Doe",
    message: "Yeah, sure. Does 1:00pm work?",
    time: "10:37am",
    color: "secondary",
  },
  {
    from: "You",
    message: "Did you still want to grab lunch today?",
    time: "9:47am",
    color: "success",
  },
]);
</script>

