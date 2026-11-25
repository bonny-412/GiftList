import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const musicPreferenceKey = 'giftlist.music';

@Component({
  selector: 'app-button-sound',
  standalone: true,
  templateUrl: './button-sound.component.html',
  styleUrl: './button-sound.component.css'
})
export class ButtonSoundComponent implements OnInit {
  @ViewChild('music', { static: true }) private music!: ElementRef<HTMLAudioElement>;

  isAudioOn = false;
  playbackFailed = false;
  playbackPending = false;

  ngOnInit(): void {
    let musicEnabled = false;
    try {
      musicEnabled = localStorage.getItem(musicPreferenceKey) === 'on';
    } catch {
      return;
    }

    if (musicEnabled) {
      void this.playMusic(this.music.nativeElement, false);
    }
  }

  async toggleSound(audio: HTMLAudioElement): Promise<void> {
    if (!audio.paused) {
      audio.pause();
      this.savePreference(false);
      return;
    }

    if (await this.playMusic(audio, true)) {
      this.savePreference(true);
    }
  }

  private async playMusic(audio: HTMLAudioElement, userInitiated: boolean): Promise<boolean> {
    this.playbackFailed = false;
    this.playbackPending = true;

    try {
      audio.currentTime = 2;
      await audio.play();
      return true;
    } catch {
      this.playbackFailed = userInitiated;
      return false;
    } finally {
      this.playbackPending = false;
    }
  }

  private savePreference(enabled: boolean): void {
    try {
      localStorage.setItem(musicPreferenceKey, enabled ? 'on' : 'off');
    } catch {
      // Playback still works when storage is unavailable.
    }
  }
}
