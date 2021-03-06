package com.panpawelw.weightliftinglog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.panpawelw.weightliftinglog.models.MediaFile;

import javax.transaction.Transactional;

@Transactional
public interface FileRepository extends JpaRepository<MediaFile, Long> {

  MediaFile findFileByWorkoutIdAndFilename(Long workoutId, String filename);

  long deleteByWorkoutIdAndFilename(Long workoutId, String filename);

  long deleteAllByWorkoutId(Long workoutId);
}
