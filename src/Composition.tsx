import {
	useVideoConfig,
	useCurrentFrame,
	spring,
	Img,
	staticFile,
} from 'remotion';
export const MyComposition = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#f2511b',
				color: '#fff',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '5rem',
				fontFamily: 'Arial',
			}}
		>
			<h1
				style={{
					display: 'inline-block',
					padding: '10px',
					border: `${frame / 20}px solid white`,
					borderRadius: `${frame / 5}px`,
					boxShadow: `11px 10px ${frame * 2}px 0px rgba(0,0,0,0.75)`,
					transform: `scale(${spring({fps, frame})})`,
				}}
			>
				Pandashark
				<Img
					src={staticFile('pandashark0.svg')}
					style={{
						width: '40px',
						height: '40px',
						transform: `rotate(${frame * 15}deg)`,
					}}
				/>
			</h1>
		</div>
	);
};
