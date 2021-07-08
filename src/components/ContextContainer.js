import React from 'react';
import App from './App';
import {ViewProvider} from '../contexts/ViewContext';
import {TextProvider} from '../contexts/TextContext';
import {EnemyProvider} from '../contexts/EnemyContext';
import {PlayerProvider} from '../contexts/PlayerContext';
import {InventoryProvider} from '../contexts/InventoryContext';
import {AttackProvider} from '../contexts/AttackContext';
import {PlayerTurnProvider} from '../contexts/PlayerTurnContext';
import {NarrationProvider} from '../contexts/NarrationContext';
import {TargetProvider} from '../contexts/TargetContext';

export default function ContextContainer() {
  return (
    <div>
      <ViewProvider>
        <InventoryProvider>
          <TextProvider>
            <PlayerProvider>
              <EnemyProvider>
                <AttackProvider>
                  <PlayerTurnProvider>
                    <NarrationProvider>
                      <TargetProvider>
                        <App />
                      </TargetProvider>
                    </NarrationProvider>
                  </PlayerTurnProvider>
                </AttackProvider>
              </EnemyProvider>
            </PlayerProvider>
          </TextProvider>
        </InventoryProvider>
      </ViewProvider>
    </div>
  );
}
