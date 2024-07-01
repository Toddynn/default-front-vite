import { motion } from 'framer-motion';

export default function WithoutConnection() {
	return (
		<div className="bg-fundo fixed !z-[1001] flex min-h-screen w-full flex-row items-center justify-center overflow-hidden pb-20 md:h-auto">
			<div className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 md:h-[40rem]">
				<motion.div
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 1,
					}}
					className="div"
				>
					<h1 className="text-center text-2xl font-medium md:text-4xl">Parece que você perdeu a conexão!</h1>
					<h2 className="mt-1 text-center text-sm font-normal text-muted-foreground">
						Reestabeleça a sua conexão com a internet e tente novamente.
					</h2>
				</motion.div>
			</div>
		</div>
	);
}
