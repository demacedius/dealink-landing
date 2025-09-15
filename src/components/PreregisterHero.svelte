<script>
// @ts-nocheck

    import { Mail } from 'lucide-svelte';
    import Input from './Input.svelte';

    let email = '';

    function handleSubmit() {
        // Handle form submission
        console.log('Form submitted with email:', email);
    }
</script>

<section class="bg-gray-50 py-20 px-4 min-h-[80vh] flex items-center">
    <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
            <div
                class="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6"
            >
                <div
                    class="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full"
                >
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-green-600 font-medium"
                        >🏆 Vainqueur concours SAAS PATH</span
                    >
                </div>
                <div
                    class="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full"
                >
                    <div
                        class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    ></div>
                    <span class="text-blue-600 font-medium"
                        >Bientôt disponible</span
                    >
                </div>
            </div>

            <h1
                class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
                Arrêtez de
                <span class="text-red-500"> refuser</span> des projets,
                <br />
                <span class="text-green-500">multipliez</span> vos
                <span class="text-blue-500 ml-2">revenus</span>
            </h1>

            <p
                class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
                Dealink met en relation les freelances débordés avec un réseau
                de talents disponibles. Soyez parmi les premiers à transformer
                votre surcharge en succès partagé.
            </p>
        </div>

        <div
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto mb-12"
        >
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Rejoignez la liste d'attente
            </h2>
            <p class="text-gray-600 mb-6">
                Soyez notifié du lancement et bénéficiez d'un accès prioritaire
            </p>

            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="relative bg-gray-100 py-2 rounded-lg">
              <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="votre@email.com"
                bind:value={email}
                class="pl-10 text-center w-full"
                required
              />
            </div>
            <button 
              type="submit" 
              class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg "
            >
              Je m'inscris gratuitement
            </button>
          </form>

            <p class="text-sm text-gray-500 mt-4">
                ✓ Accès prioritaire • ✓ 0€ commission les 3 premiers mois • ✓
                Pas de spam
            </p>
        </div>

        <div
            class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500"
        >
            <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>847 porteurs d'affaires inscrits</span>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>400 freelances en attente</span>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Lancement prévu : Q3 2025</span>
            </div>
        </div>
    </div>
</section>