import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider, AppRoot, SplitLayout, SplitCol, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Finish from './panels/Finish';



const App = () => {
	const [activePanel, setActivePanel] = useState('finish');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Finish id="finish" />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
