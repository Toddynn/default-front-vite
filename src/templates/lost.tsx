import { Button } from '@/components/ui/button';
import Particles from '@/components/ui/particles';
import { useNavigate } from 'react-router-dom';

export default function LostPage() {
	const navigate = useNavigate();

	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-4">
			<img src={'/404.svg?url'} alt="404" width={600} />
			<div className="z-[1001!important] flex items-center gap-4">
				<Button size={'lg'} onClick={() => navigate('/')}>
					Início
				</Button>
				<Button variant={'secondary'} size={'lg'} onClick={() => navigate(-1)}>
					Voltar onde eu estava
				</Button>
			</div>
			<Particles className="absolute inset-0" quantity={200} refresh />
		</div>
	);
}
