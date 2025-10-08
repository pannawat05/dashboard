<script>
    import { onMount } from 'svelte';   
    import { getDetections } from '../lib/control';
    
    let items = [];

    onMount(async () => {
        items = await getDetections();
        console.log(items);
    });
</script>

<div class="flex flex-col items-center mt-10">
  <h1 class="text-3xl font-bold underline mb-6 text-center">
    Smart NVR Detection Dashboard
  </h1>

  <div class="overflow-x-auto w-full max-w-5xl">
    <table class="min-w-full border border-gray-300 divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
          <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Detected Time</th>
          <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Camera Detected</th>
          <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Person Detected</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#if items.length > 0}
          {#each items as item}
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2">{item.id}</td>
              <td class="px-4 py-2">{item.timestamp}</td>
              <td class="px-4 py-2">{item.camera}</td>
              <td class="px-4 py-2"><div class="flex"><img src={`http://192.168.180.150:8085/${item.person}.jpg`} class="w-15 h-20" alt=""><b class="mt-5 ms-5">{item.person}</b></div></td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="4" class="px-4 py-4 text-center text-gray-500">
              No data available
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
