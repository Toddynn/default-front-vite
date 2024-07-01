import './loader.css';
export default function LoadingPage() {
	return (
		<div className=" relative flex min-h-screen flex-col place-items-center items-center justify-center self-center">
			<div className="loader h-[36px] w-[36px]" />
			<div className="scanner">
				<span>Carregando...</span>
			</div>
		</div>
	);
}
