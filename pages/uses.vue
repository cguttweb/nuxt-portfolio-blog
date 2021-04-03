<template>
  <div class="bg-gray-900">
    <main class="container mx-auto text-white" role="main">
      <p class="py-4 text-center">A list of hardware and software I use when coding</p>
      <div class="flex py-4">
        <section class="w-1/4">
            <h2>Software</h2>
          <ul>
            <li v-for="item in development" :key="item.label"><span class="text-green-400 text-bold">{{ item.label }}</span> {{ item.product }}</li>
          </ul>
        </section>

        <section class="w-1/2">
          <h2>Hardware</h2>
          <ul>
            <li v-for="item in hardware" :key="item.label"><span class="text-green-400 text-bold">{{ item.label }}</span> {{ item.product }}</li>
          </ul>
        </section>

        <section class="w-1/3">
          <h2>Other things:</h2>
          <ul>
            <li v-for="otherItem in otherStuff" :key="otherItem.label"><span class="text-green-400">{{ otherItem.label }}</span> {{ otherItem.product }}</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head(){
    return {
        title: 'Web Developer Portfolio | Uses'
    }
  },
  data(){
    return {
      development: [
        { 
          label: 'Editor:',
          product: 'vscode',
        },
        {
          label: 'Theme:',
          product: 'monokai'
        },
        {
          label: 'Main browser:',
          product: 'Firefox'
        }
      ],
      hardware: [
        {
          label: 'Keyboard:',
          product: 'Corsair K70 RGB MK.2 Mechanical (Chery MX Silent keys)'
        },
        {
          label: 'Mouse:',
          product: 'Corsair Raptor M45 gaming mouse'
        },
        {
          label: 'Monitor 1:',
          product: 'Asus 24"'
        },
        {
          label: 'Monitor 2:',
          product: 'Iiyama XUB2390HS-B1 23" IPS Monitor'
        },
        {
          label: 'Phone:',
          product: 'Samsung Android'
        }
      ],
      otherStuff: [
        {
          label: 'Laptop:',
          product: 'MSI GE62 6QL(APACHE)-210UK 15.6',
          OS: 'Linux Mint'
        },
        {
          label: 'Laptop OS',
          product: 'Linux Mint'
        },
        {
          label: 'Music:',
          product: 'Spotify',
        },
        {
          label: 'Passwords:',
          product: 'Lastpass',
        },
        {
          label: 'Desktop:',
          product: 'OS = Windows'
        },
      ],
      likes: [
        'git',
        'vue',
        'nuxt',
        'tailwindcss'
      ]
    }
  }
}
</script>

<style scoped>
main {
  font-size: 1rem;
  height: 88vh;
}

h2 {
  font-size: 1.2rem;
}

li {
  font-size: 1rem;
}
</style>