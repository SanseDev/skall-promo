import { Box } from "@/components/box/box";
import { Container } from "@/components/container/container";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";

export default async function Index() {
  return (
    <>
      <Container className="py-12 space-y-10">
        <div className="w-full border border-gray-200 bg-white rounded shadow-lg px-9 py-9 box bg-gradient-to-r from-indigo-300 to-indigo-500">
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
        <div className="w-full border border-gray-200 bg-white rounded shadow-lg px-9 py-9 box bg-gradient-to-r from-indigo-300 to-indigo-500">
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
        <div className="w-full border border-gray-200 bg-white rounded shadow-lg px-9 py-9 box bg-gradient-to-r from-indigo-300 to-indigo-500">
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
      </Container>
    </>
  );
}
