import { Button, Panel, PanelHeader, Title } from "@vkontakte/vkui";


function Finish() {
  return (
    <Panel class="Finish">
      <Title level="1" style={{marginBottom: 16}}>
        Ты мастер IT-сленга! Пришло время прокачать свои знания. Подписывайся на VK Education и участвуй в образовательных проектах от VK!
      </Title>
      <Link href="https://m.vk.com/vkeducation">
        <Button size="l" stretched={true}>
          VK Education
        </Button>
      </Link>
    </Panel>
  )
}

export default Finish;
