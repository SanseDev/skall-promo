import { Box } from "@/components/box/box";
import { Container } from "@/components/container/container";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";

export default async function Index() {
  return (
    <>
      <Container className="py-12 space-y-10 max-w-full">
        <Box className="w-full border border-gray-200 bg-blue-100 rounded shadow-lg">

        <div className="flex items-center justify-between px-96">

        <div className="flex flex-col max-w-2xl">
        <Typography variant="h1" component="h1" theme="black">
            Skall Promo
          </Typography>
          <Typography variant="body-lg">
            Faites du parrainage pour avoir des promotions.
          </Typography>
          <Typography variant="body-lg">
            Connecter vous grâce à votre wallet.
          </Typography>
          <Typography variant="body-lg">
            Gagne des codes promos.
          </Typography>
        </div>

        <Image
          alt="Illustration d'une carte bleu'"
          src="/assets/image/skp-logo.png"
          width={250}
          height={250}
          className="rounded-2xl"
          />

        </div>

        </Box>

      </Container>
      
      <Container className="grid grid-cols-2 py-12 pt-0 max-w-full gap-4">
      <div className="w-full border border-gray-200 bg-white rounded-3xl shadow-lg px-9 py-9 box bg-gradient-to-r from-indigo-300 to-indigo-500">
          <Image
          alt="Illustration du logo Phantom"
          src="/assets/svg/phantom.svg"
          width={250}
          height={250}
          />
          <Button>
            Connect your wallet
          </Button>
        </div>
        <div className="w-full border border-gray-200 bg-white rounded-3xl shadow-lg px-14 py-14 space-y-5 box bg-gradient-to-r from-amber-500 to-amber-800">
          <Image
          alt="Illustration du logo de Metamask"
          src="/assets/svg/metamask.svg"
          width={100}
          height={100}
          />

          <div className="py-5">
          <Button>
            Connect your wallet
          </Button>
          </div>

        </div>
      </Container>
    </>
  );
}
