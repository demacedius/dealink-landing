<script>
  import { Mail, ArrowRight, Clock, Loader, AlertTriangle, CheckCircle } from "lucide-svelte";
  import { supabase } from "../lib/supabaseClient";

  let email = "";
  let userType = "freelancer"; // 'freelancer' or 'business_provider'
  let status = "idle"; // idle | submitting | success | error
  let message = "";

  const handleSubmit = async () => {
    if (!email || !userType) return;

    status = "submitting";
    const tableName = userType === 'freelancer' ? 'freelances' : 'porteurs_d_affaire';

    const { error } = await supabase.from(tableName).insert({ email });

    if (error) {
      status = "error";
      if (error.code === '23505') { // Unique constraint violation
        message = "Cet email est déjà enregistré.";
      } else {
        message = "Une erreur est survenue. Veuillez réessayer.";
      }
      console.error("Erreur d'insertion:", error);
    } else {
      status = "success";
      message = "Inscription confirmée ! Vous recevrez un email dès que Dealink sera disponible.";
    }
  };
</script>

<style>
  .user-type-btn {
    transition: all 0.2s ease-in-out;
  }
  .user-type-btn.active {
    background-color: #3b82f6; /* bg-blue-500 */
    color: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
</style>

<section class="py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto text-center">
        <div
            class="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-8"
        >
            <Clock class="w-5 h-5 text-orange-500" />
            <span class="text-orange-600 font-medium">Lancement imminent</span>
        </div>

        <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Ne ratez pas le lancement de Dealink
        </h2>

        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Soyez parmi les premiers utilisateurs et bénéficiez de 6 mois
            d'utilisation gratuite.
        </p>

        {#if status !== "success"}
            <div class="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        <button type="button" on:click={() => userType = 'freelancer'} class="user-type-btn w-full py-2 px-4 rounded-lg font-semibold border border-gray-200 bg-white" class:active={userType === 'freelancer'}>
                            Freelance
                        </button>
                        <button type="button" on:click={() => userType = 'business_provider'} class="user-type-btn w-full py-2 px-4 rounded-lg font-semibold border border-gray-200 bg-white" class:active={userType === 'business_provider'}>
                            Porteur d'affaire
                        </button>
                    </div>

                    <div class="relative bg-gray-200 rounded-md">
                        <Mail
                            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        />
                        <input
                            type="email"
                            placeholder="Votre email professionnel"
                            bind:value={email}
                            class="pl-10 py-2 w-full text-center"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 group flex items-center justify-center rounded-lg disabled:bg-blue-300"
                        disabled={status === 'submitting'}
                    >
                        {#if status === 'submitting'}
                            <Loader class="w-5 h-5 animate-spin" />
                        {:else}
                            Réserver ma place gratuitement
                            <ArrowRight
                            class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        {/if}
                    </button>
                </form>

                {#if status === 'error'}
                <div class="flex items-center justify-center text-red-600 mt-4">
                    <AlertTriangle class="w-4 h-4 mr-2" />
                    <span class="text-sm font-medium">{message}</span>
                </div>
                {/if}

                <div class="mt-6 space-y-2 text-sm text-gray-600">
                    <div class="flex items-center justify-center space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Inscription gratuite</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Accès prioritaire garanti</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>6 mois d'utilisation offerts</span>
                    </div>
                </div>
            </div>
        {:else}
            <div
                class="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-md mx-auto"
            >
                <div
                    class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <CheckCircle class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-green-800 mb-2">
                    Inscription confirmée !
                </h3>
                <p class="text-green-700">
                    {message}
                </p>
            </div>
        {/if}

        <div class="mt-12 text-center">
            <p class="text-gray-500 text-sm mb-4">
                Plus que <span class="font-bold text-orange-500">quelques places</span
                > disponibles pour l'accès prioritaire
            </p>
            <div class="bg-gray-200 rounded-full h-2 max-w-xs mx-auto">
                <div
                    class="bg-blue-500 h-2 rounded-full"
                    style="width: 85%;"
                ></div>
            </div>
        </div>
    </div>
</section>
